import type {} from "@comet/admin-color-picker/src/themeAugmentation";
import type {} from "@comet/admin-react-select/src/themeAugmentation";
import type {} from "@comet/admin-rte/src/themeAugmentation";
import type {} from "@comet/admin/src/themeAugmentation";
import { ThemeOptions } from "@material-ui/core/styles";

import cometAdminColorPickerOverrides from "./cometAdminColorPickerOverrides/colorPicker";
import { cometAdminBreadcrumbsOverrides } from "./cometAdminOverrides/breadcrumbs";
import cometAdminClearInputButtonOverrides from "./cometAdminOverrides/clearInputButton";
import cometAdminErrorBoundaryOverrides from "./cometAdminOverrides/errorBoundary";
import cometAdminFormFieldContainerOverrides from "./cometAdminOverrides/formFieldContainer";
import cometAdminInputBaseOverrides from "./cometAdminOverrides/inputBase";
import cometAdminMainContentOverrides from "./cometAdminOverrides/maincontent";
import cometAdminMasterLayoutOverrides from "./cometAdminOverrides/masterLayout";
import cometAdminMenuOverrides from "./cometAdminOverrides/menu";
import cometAdminMenuCollapsibleItemOverrides from "./cometAdminOverrides/menuCollapsibleItem";
import cometAdminMenuItemOverrides from "./cometAdminOverrides/menuItem";
import { cometAdminToolbarOverrides } from "./cometAdminOverrides/toolbar";
import { cometAdminToolbarBackButtonOverrides } from "./cometAdminOverrides/toolbarbackbutton";
import { cometAdminToolbarItemOverrides } from "./cometAdminOverrides/toolbaritem";
import { cometAdminBreadcrumbsProps } from "./cometAdminProps/breadcrumbs";
import cometAdminErrorBoundaryProps from "./cometAdminProps/errorBoundary";
import cometAdminMasterLayoutProps from "./cometAdminProps/masterLayout";
import cometAdminMenuProps from "./cometAdminProps/menu";
import cometAdminMenuCollapsibleItemProps from "./cometAdminProps/menuCollapsibleItem";
import { cometAdminToolbarProps } from "./cometAdminProps/toolbar";
import { cometAdminToolbarBackButtonProps } from "./cometAdminProps/toolbarBackButton";
import cometAdminRteBlockTypeControlsOverrides from "./cometAdminRteOverrides/blockTypeControls";
import cometAdminRteControlButtonOverrides from "./cometAdminRteOverrides/controlButton";
import cometAdminRteFeaturesButtonGroupOverrides from "./cometAdminRteOverrides/featuresButtonGroup";
import cometAdminRteLinkControlsOverrides from "./cometAdminRteOverrides/linkControls";
import cometAdminRteRteOverrides from "./cometAdminRteOverrides/rte";
import cometAdminRteToolbarOverrides from "./cometAdminRteOverrides/toolbar";
import cometAdminSelectOverrides from "./cometAdminSelectOverrides/select";
import getShadows from "./getShadows";
import getMuiOverrides from "./MuiOverrides";
import getMuiProps from "./MuiProps";
import { paletteOptions } from "./paletteOptions";
import { typographyOptions } from "./typographyOptions";

export default (): ThemeOptions => ({
    spacing: 5,
    palette: paletteOptions,
    typography: typographyOptions,
    shape: {
        borderRadius: 2,
    },
    shadows: getShadows(),
    props: {
        CometAdminMenu: cometAdminMenuProps(),
        CometAdminMenuCollapsibleItem: cometAdminMenuCollapsibleItemProps(),
        CometAdminMasterLayout: cometAdminMasterLayoutProps(),
        CometAdminErrorBoundary: cometAdminErrorBoundaryProps(),
        CometAdminBreadcrumbs: cometAdminBreadcrumbsProps(),
        ...getMuiProps(),
        CometAdminToolbar: cometAdminToolbarProps(),
        CometAdminToolbarBackButton: cometAdminToolbarBackButtonProps(),
        MuiAppBar: {
            elevation: 0,
        },
    },
    overrides: {
        CometAdminClearInputButton: cometAdminClearInputButtonOverrides(),
        CometAdminFormFieldContainer: cometAdminFormFieldContainerOverrides(),
        CometAdminMenu: cometAdminMenuOverrides(),
        CometAdminMenuItem: cometAdminMenuItemOverrides(),
        CometAdminMenuCollapsibleItem: cometAdminMenuCollapsibleItemOverrides(),
        CometAdminMainContent: cometAdminMainContentOverrides(),
        CometAdminMasterLayout: cometAdminMasterLayoutOverrides(),
        CometAdminToolbar: cometAdminToolbarOverrides(),
        CometAdminToolbarBackButton: cometAdminToolbarBackButtonOverrides(),
        CometAdminToolbarItem: cometAdminToolbarItemOverrides(),
        CometAdminInputBase: cometAdminInputBaseOverrides(),

        /*RTE*/
        CometAdminRte: cometAdminRteRteOverrides(),
        CometAdminRteToolbar: cometAdminRteToolbarOverrides(),
        CometAdminRteControlButton: cometAdminRteControlButtonOverrides(),
        CometAdminRteFeaturesButtonGroup: cometAdminRteFeaturesButtonGroupOverrides(),
        CometAdminRteBlockTypeControls: cometAdminRteBlockTypeControlsOverrides(),
        CometAdminRteLinkControls: cometAdminRteLinkControlsOverrides(),

        /*Select*/
        CometAdminSelect: cometAdminSelectOverrides(),

        /* Color Picker*/
        CometAdminColorPicker: cometAdminColorPickerOverrides(),
        CometAdminErrorBoundary: cometAdminErrorBoundaryOverrides(),
        CometAdminBreadcrumbs: cometAdminBreadcrumbsOverrides(),
        ...getMuiOverrides(),
    },
});
