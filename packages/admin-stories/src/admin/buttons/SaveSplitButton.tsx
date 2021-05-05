import { SaveSplitButton } from "@comet/admin";
import { Typography } from "@material-ui/core";
import { storiesOf } from "@storybook/react";
import * as React from "react";

storiesOf("@comet/admin/buttons", module).add("Save Split Button", () => {
    const [saving, setSaving] = React.useState(false);

    return (
        <div>
            <Typography variant={"h4"}>Split Button</Typography>

            <Typography variant={"h4"}>Save Split Button</Typography>

            <SaveSplitButton
                saving={saving}
                onSavePressed={() => {
                    setSaving(true);
                    setTimeout(() => {
                        setSaving(false);
                    }, 1000);
                }}
                onSaveAndGoBackPressed={() => {
                    setSaving(true);
                    setTimeout(() => {
                        setSaving(false);
                    }, 1000);
                }}
            />
        </div>
    );
});
