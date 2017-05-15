import { FlowService } from "./../services/FlowService";
import { GameService } from "./../services/GameService";
import { GameModel } from "./../models/GameModel";
import { GameEvent } from "./../events/GameEvent";
import { HUDGameComponent } from "./../views/components/HUDGameComponent";

import { Mediator } from "robotlegs-pixi";
import { injectable, inject } from "robotlegs";

@injectable()
export class HUDGameComponentMediator extends Mediator<HUDGameComponent> {

    @inject(GameModel)
    public model: GameModel;

    @inject(GameService)
    public gameService: GameService;

    @inject(FlowService)
    public flowService: FlowService;

    public initialize(): void {
        this.eventMap.mapListener(this.view.pauseButton, "click", this.pauseButton_onClick, this);
        this.eventMap.mapListener(this.eventDispatcher, GameEvent.UPDATE_HUD_DATA, this.game_onUpdate, this);
    }

    public destroy(): void {
        this.eventMap.unmapListeners();
    }

    private game_onUpdate(e: any): void {
        this.view.updateData(this.model);
    }

    private pauseButton_onClick(e: any): void {
        this.gameService.pause();
        this.flowService.showPausePopup();
    }
}