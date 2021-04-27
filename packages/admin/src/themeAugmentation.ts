import { ClearInputButtonThemeProps, CometAdminClearInputButtonClassKeys } from "./common";
import { CometAdminErrorBoundaryClassKeys, ErrorBoundaryThemeProps } from "./error";
import {
    CometAdminFinalFormRangeSliderClassKeys,
    CometAdminFormFieldContainerClassKeys,
    CometAdminFormPaperKeys,
    CometAdminFormSectionKeys,
    CometAdminInputBaseClassKeys,
    FieldContainerThemeProps,
} from "./form";
import { CometAdminFixedLeftRightLayoutKeys } from "./layout";
import {
    CometAdminBreadcrumbsClassKeys,
    CometAdminBreadcrumbsThemeProps,
    CometAdminMasterLayoutClassKeys,
    CometAdminMenuClassKeys,
    CometAdminMenuCollapsibleItemClassKeys,
    CometAdminMenuItemClassKeys,
    MasterLayoutThemeProps,
    MenuCollapsibleItemThemeProps,
    MenuThemeProps,
} from "./mui";

declare module "@material-ui/core/styles/overrides" {
    interface ComponentNameToClassKey {
        CometAdminClearInputButton: CometAdminClearInputButtonClassKeys;
        CometAdminFormFieldContainer: CometAdminFormFieldContainerClassKeys;
        CometAdminMenu: CometAdminMenuClassKeys;
        CometAdminMenuItem: CometAdminMenuItemClassKeys;
        CometAdminMenuCollapsibleItem: CometAdminMenuCollapsibleItemClassKeys;
        CometAdminMasterLayout: CometAdminMasterLayoutClassKeys;
        CometAdminInputBase: CometAdminInputBaseClassKeys;
        CometAdminErrorBoundary: CometAdminErrorBoundaryClassKeys;
        CometAdminFormPaper: CometAdminFormPaperKeys;
        CometAdminFormSection: CometAdminFormSectionKeys;
        CometAdminFixedLeftRightLayout: CometAdminFixedLeftRightLayoutKeys;
        CometAdminBreadcrumbs: CometAdminBreadcrumbsClassKeys;
        CometAdminFinalFormRangeSlider: CometAdminFinalFormRangeSliderClassKeys;
    }
}

declare module "@material-ui/core/styles/props" {
    interface ComponentsPropsList {
        CometAdminClearInputButton: ClearInputButtonThemeProps;
        CometAdminFormFieldContainer: FieldContainerThemeProps;
        CometAdminMenu: MenuThemeProps;
        CometAdminMenuCollapsibleItem: MenuCollapsibleItemThemeProps;
        CometAdminMasterLayout: MasterLayoutThemeProps;
        CometAdminErrorBoundary: ErrorBoundaryThemeProps;
        CometAdminBreadcrumbs: CometAdminBreadcrumbsThemeProps;
    }
}
