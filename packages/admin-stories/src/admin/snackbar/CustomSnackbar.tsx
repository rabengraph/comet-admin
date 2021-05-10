import { SnackbarProvider, useSnackbarApi } from "@comet/admin";
import { Button, List, ListItem, Snackbar } from "@material-ui/core";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import styled from "styled-components";

const ShowSnackbarButton = styled(Button)`
    && {
        background-color: darkred;
        color: white;
    }

    &&:hover {
        opacity: 0.7;
        background-color: darkred;
    }
`;

const HideSnackbarButton = styled(Button)`
    && {
        background-color: blue;
        color: white;

        &&:hover {
            opacity: 0.7;
            background-color: blue;
        }
    }
`;

let counter = 0;

const CustomSnackbar = () => {
    const snackbarApi = useSnackbarApi();

    const handleActionButtonClick = () => {
        window.alert("Action button clicked");
        snackbarApi.hideSnackbar();
    };

    const showCustomSnackbar = () => {
        snackbarApi.showSnackbar(
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                // Use uuid or object id in production
                key={counter++}
                autoHideDuration={5000}
                message="This is a completely customizable snackbar"
                action={
                    <Button color="secondary" size="small" onClick={handleActionButtonClick}>
                        Custom Button
                    </Button>
                }
            />,
        );
    };

    return (
        <List>
            <ListItem>
                <ShowSnackbarButton onClick={showCustomSnackbar}>Show Snackbar</ShowSnackbarButton>
            </ListItem>
            <ListItem>
                <HideSnackbarButton onClick={snackbarApi.hideSnackbar}>Hide Snackbar</HideSnackbarButton>
            </ListItem>
        </List>
    );
};

function Story() {
    return (
        <SnackbarProvider>
            <CustomSnackbar />
        </SnackbarProvider>
    );
}

storiesOf("@comet/admin/snackbar", module).add("Custom Snackbar", () => <Story />);
