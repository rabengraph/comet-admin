import type {} from "@comet/admin-color-picker/src/themeAugmentation";
import type {} from "@comet/admin-react-select/src/themeAugmentation";
import type {} from "@comet/admin-rte/src/themeAugmentation";
import type {} from "@comet/admin/src/themeAugmentation";
import { ThemeOptions } from "@material-ui/core/styles";

import cometAdminColorPickerOverrides from "./cometAdminColorPickerOverrides/colorPicker";
import cometAdminClearInputButtonOverrides from "./cometAdminOverrides/clearInputButton";
import cometAdminFormFieldContainerOverrides from "./cometAdminOverrides/formFieldContainer";
import cometAdminInputBaseOverrides from "./cometAdminOverrides/inputBase";
import cometAdminMasterLayoutOverrides from "./cometAdminOverrides/masterLayout";
import cometAdminMenuOverrides from "./cometAdminOverrides/menu";
import cometAdminMenuCollapsibleItemOverrides from "./cometAdminOverrides/menuCollapsibleItem";
import cometAdminMenuItemOverrides from "./cometAdminOverrides/menuItem";
import cometAdminRteBlockTypeControlsOverrides from "./cometAdminRteOverrides/blockTypeControls";
import cometAdminRteControlButtonOverrides from "./cometAdminRteOverrides/controlButton";
import cometAdminRteFeaturesButtonGroupOverrides from "./cometAdminRteOverrides/featuresButtonGroup";
import cometAdminRteLinkControlsOverrides from "./cometAdminRteOverrides/linkControls";
import cometAdminRteRteOverrides from "./cometAdminRteOverrides/rte";
import cometAdminRteToolbarOverrides from "./cometAdminRteOverrides/toolbar";
import cometAdminSelectOverrides from "./cometAdminSelectOverrides/select";
import getPaletteOptions from "./getPaletteOptions";
import getTypographyOptions from "./getTypographyOptions";

export default (): ThemeOptions => ({
    spacing: 5,
    palette: getPaletteOptions(),
    typography: getTypographyOptions(),
    shape: {
        borderRadius: 2,
    },
    overrides: {
        CometAdminClearInputButton: cometAdminClearInputButtonOverrides(),
        CometAdminFormFieldContainer: cometAdminFormFieldContainerOverrides(),
        CometAdminMenu: cometAdminMenuOverrides(),
        CometAdminMenuItem: cometAdminMenuItemOverrides(),
        CometAdminMenuCollapsibleItem: cometAdminMenuCollapsibleItemOverrides(),
        CometAdminMasterLayout: cometAdminMasterLayoutOverrides(),
        CometAdminInputBase: cometAdminInputBaseOverrides(),
        CometAdminRte: cometAdminRteRteOverrides(),
        CometAdminRteToolbar: cometAdminRteToolbarOverrides(),
        CometAdminRteControlButton: cometAdminRteControlButtonOverrides(),
        CometAdminRteFeaturesButtonGroup: cometAdminRteFeaturesButtonGroupOverrides(),
        CometAdminRteBlockTypeControls: cometAdminRteBlockTypeControlsOverrides(),
        CometAdminRteLinkControls: cometAdminRteLinkControlsOverrides(),
        CometAdminSelect: cometAdminSelectOverrides(),
        CometAdminColorPicker: cometAdminColorPickerOverrides(),
    },
});
