import { BattleFieldComponentMediator } from "./../mediators/BattleFieldComponentMediator";
import { GameOverPopupMediator } from "./../mediators/GameOverPopupMediator";
import { GameViewMediator } from "./../mediators/GameViewMediator";
import { HomeViewMediator } from "./../mediators/HomeViewMediator";
import { HUDGameComponentMediator } from "./../mediators/HUDGameComponentMediator";
import { InfoPopupMediator } from "./../mediators/InfoPopupMediator";
import { IntroViewMediator } from "./../mediators/IntroViewMediator";
import { OptionsViewMediator } from "./../mediators/OptionsViewMediator";
import { PixiContainerMediator } from "./../mediators/PixiContainerMediator";
import { PausePopupMediator } from "./../mediators/PausePopupMediator";
import { ResetConfirmPopupMediator } from "./../mediators/ResetConfirmPopupMediator";
import { StartingPopupMediator } from "./../mediators/StartingPopupMediator";

import { BattleFieldComponent } from "./../views/components/BattleFieldComponent";
import { GameOverPopup } from "./../views/GameOverPopup";
import { GameView } from "./../views/GameView";
import { HomeView } from "./../views/HomeView";
import { HUDGameComponent } from "./../views/components/HUDGameComponent";
import { InfoPopup } from "./../views/InfoPopup";
import { IntroView } from "./../views/IntroView";
import { OptionsView } from "./../views/OptionsView";
import { PausePopup } from "./../views/PausePopup";
import { ResetConfirmPopup } from "./../views/ResetConfirmPopup";
import { StartingPopup } from "./../views/StartingPopup";

import { PixiContainer } from "./../robotlegs/bender/extensions/palidorFlowManager/impl/PixiContainer";

import { IMediatorMap } from "robotlegs-pixi";
import { injectable, IConfig, inject } from "robotlegs";

@injectable()
export class ViewsConfig implements IConfig {

    @inject(IMediatorMap)
    public mediatorMap: IMediatorMap;

    public configure(): void {
        this.mapMediators();
    }

    private mapMediators(): void {
        this.mediatorMap.map(GameView).toMediator(GameViewMediator);
        this.mediatorMap.map(HomeView).toMediator(HomeViewMediator);
        this.mediatorMap.map(IntroView).toMediator(IntroViewMediator);
        this.mediatorMap.map(OptionsView).toMediator(OptionsViewMediator);
        this.mediatorMap.map(PixiContainer).toMediator(PixiContainerMediator);

        this.mediatorMap.map(BattleFieldComponent).toMediator(BattleFieldComponentMediator);
        this.mediatorMap.map(HUDGameComponent).toMediator(HUDGameComponentMediator);

        this.mediatorMap.map(GameOverPopup).toMediator(GameOverPopupMediator);
        this.mediatorMap.map(InfoPopup).toMediator(InfoPopupMediator);
        this.mediatorMap.map(PausePopup).toMediator(PausePopupMediator);
        this.mediatorMap.map(ResetConfirmPopup).toMediator(ResetConfirmPopupMediator);
        this.mediatorMap.map(StartingPopup).toMediator(StartingPopupMediator);
    }
}