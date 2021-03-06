import React from 'react';
import { AppContainer } from './components/AppContainer';
import { HomeView } from './components/HomeView';
import { SelectView } from './components/SelectView';
import './App.css';
import { MathSessionTemplate, MathSessionOptions, SessionType, MathFuncs, SessionTypeNames, MathSessionResults } from './model/Math';
import { Data, StorageFuncs, Settings, DefaultData, AuthData } from './model/Storage';
import { Util } from './model/Util';
import { MathView } from './components/MathView';
import { SettingsView } from './components/SettingsView';
import { StatsView } from './components/StatsView';

type AppView = 'home' | 'select' | 'math' | 'stats' | 'settings' | 'loading';

type AppProps = {

}

type AppState = {
    view: AppView,
    data: Data,
    authData: AuthData | null,
    sessionOptions: MathSessionOptions | null
}

export class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            view: 'loading',
            data: Util.clone(DefaultData),
            authData: StorageFuncs.loadAuth(),
            sessionOptions: null
        }
        if (this.state.authData !== null) {
            StorageFuncs.load(this.state.authData).then(data => {
                if (data) {
                    this.setState({
                        view: 'home',
                        data
                    });
                } else {
                    alert("Unable to load from gist");
                    this.setState({
                        view: 'home',
                        data: Util.clone(DefaultData)
                    });
                }
            });
        } else {
            // Kinda sketch
            this.state = Util.extend(this.state, { view: 'home' });
        }
    }

    // Update Data
    updateData(data: Data) {
        this.setState({
            data
        });
        if (this.state.authData) {
            StorageFuncs.save(this.state.authData, data).then(res => {
                // Let the user know when they are unable to save
                if (!res) {
                    alert("Data was unable to be saved! Your save data may not be backed up properly");
                }
            });
        }
    }

    // General handlers
    handleNavigate(view: AppView) {
        this.setState({
            view
        })
    }

    handleStartDefaultSession(type: SessionType) {
        let options = MathFuncs.generateDefaultSessionOptions(type);
        this.handleStartSession(options);
    }

    // Select View
    handleTemplateAdd(template: MathSessionTemplate) {
        let data = Util.clone(this.state.data);
        data.templates.push(template);

        this.updateData(data);
    }

    handleTemplateRemove(index: number) {
        let data = Util.clone(this.state.data);
        data.templates.splice(index, 1);

        this.updateData(data);
    }

    handleStartSession(options: MathSessionOptions) {
        let view: 'math' = 'math';
        this.setState({
            view,
            sessionOptions: options
        });
    }

    // Math Session View
    handleFinishSession(result: MathSessionResults) {
        alert("Finished session in " + Util.formatSeconds(result.totalTime));

        let data = this.state.data;
        data.history.push(result);
        this.setState({
            view: 'stats',
            data
        });
        this.updateData(data);
    }

    // Stats View
    handleRemoveHistory(index: number) {
        let { data } = Util.clone(this.state);
        data.history.splice(index, 1);
        this.updateData(data)
    }

    // Settings View
    handleUpdateSettings(settings: Settings) {
        let data = this.state.data;
        data.settings = settings;
        this.updateData(data);
    }

    async handleAddAuth(token: string): Promise<void> {
        let authData = await StorageFuncs.saveAuth(token);
        if (authData === null) {
            alert("Invalid Github auth token");
        } else {
            let data = await StorageFuncs.load(authData);
            if (data === null) {
                alert("Unable to load data from Github");
                return;
            }
            this.setState({
                authData,
                data
            });
            alert("Successfully linked auth data");
        }
    }

    async handleCheckSync(): Promise<boolean> {
        if (!this.state.authData) {
            return false;
        }
        let data = await StorageFuncs.load(this.state.authData);
        if (Util.compare(data, this.state.data)) {
            return true;
        } else {
            return false;
        }
    }

    async handleManualSave(): Promise<boolean> {
        if (!this.state.authData) {
            return false;
        }
        let res = await StorageFuncs.save(this.state.authData, this.state.data);
        if (res === false) {
            return false;
        } else {
            this.setState({
                authData: StorageFuncs.loadAuth()
            })
            return true;
        }
    }

    async handleManualLoad(): Promise<boolean> {
        if (!this.state.authData) {
            return false;
        }
        let res = await StorageFuncs.load(this.state.authData);
        if (res === null) {
            return false;
        } else {
            this.setState({
                data: res
            });
            return true;
        }
    }

    async handleUnlink(): Promise<boolean> {
        StorageFuncs.clearAuth();
        this.setState({
            authData: null
        })
        return true;
    }

    // ~~Blender~~ render
    render() {
        let data = this.state.data;
        let authData = this.state.authData;
        let sessionOptions = this.state.sessionOptions;
        let settings = this.state.data.settings;

        let child: React.ReactNode;
        let title: string = "";
        let showExit: boolean = false;
        let onExit = () => this.handleNavigate('home');
        let exitPrompt: string | null = null;

        if (this.state.view === 'home') {
            title = "Math Practice!";
            showExit = false;
            child = <HomeView
                history={data.history}
                onStartPractice={this.handleStartDefaultSession.bind(this)}
                onNavigateSelectSession={() => this.handleNavigate('select')}
                onNavigateStats={() => this.handleNavigate('stats')}
                onNavigateSettings={() => this.handleNavigate('settings')}
            />;
        } else if (this.state.view === 'select') {
            title = "Custom Practice";
            showExit = true;
            child = <SelectView
                sessionTemplates={data.templates}
                onAddSessionTemplate={this.handleTemplateAdd.bind(this)}
                onRemoveSessionTemplate={this.handleTemplateRemove.bind(this)}
                onStartSession={this.handleStartSession.bind(this)}
            />
        } else if (this.state.view === 'math') {
            title = SessionTypeNames[sessionOptions!.type];
            showExit = true;
            exitPrompt = "Are you sure you want to quit practice now?";
            child = <MathView
                settings={settings}
                options={sessionOptions!}
                onFinishSession={this.handleFinishSession.bind(this)}
            />
        } else if (this.state.view === 'stats') {
            title = "User Statistics";
            showExit = true;
            child = <StatsView
                onRemoveHistory={this.handleRemoveHistory.bind(this)}
                history={data.history} />
        } else if (this.state.view === 'settings') {
            title = "Settings";
            showExit = true;
            child = <SettingsView
                authData={authData}
                data={data}
                settings={settings}
                onUpdateSettings={this.handleUpdateSettings.bind(this)}
                onAddAuth={this.handleAddAuth.bind(this)}
                onCheckSync={this.handleCheckSync.bind(this)}
                onManualSave={this.handleManualSave.bind(this)}
                onManualLoad={this.handleManualLoad.bind(this)}
                onUnlink={this.handleUnlink.bind(this)}
            />
        } else if (this.state.view === 'loading') {
            title = "Loading...";
            showExit = false;
            child = <div></div>
        }

        return (
            <AppContainer
                title={title}
                exitPrompt={exitPrompt}
                onExit={onExit}
                showExit={showExit}>
                {child}
            </AppContainer>
        );
    }
}
