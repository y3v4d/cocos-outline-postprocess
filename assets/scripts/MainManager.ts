import { _decorator, Component, Label, Node, postProcess, Slider } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MainManager')
export class MainManager extends Component {
    @property(postProcess.BlitScreen)
    private blitScreen: postProcess.BlitScreen = null;

    @property(Label)
    private widthLabel: Label = null;

    onWidthSliderChange(slider: Slider) {
        const width = Math.round(slider.progress * 10);
        this.widthLabel.string = `Outline Width: ${width.toString()}`;

        this.blitScreen.activeMaterials[0].setProperty('outlineWidth', width);
    }
}


