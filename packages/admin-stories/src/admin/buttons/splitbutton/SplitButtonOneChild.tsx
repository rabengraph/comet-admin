import { SplitButton } from "@comet/admin";
import { Button, Typography } from "@material-ui/core";
import { storiesOf } from "@storybook/react";
import * as React from "react";

const Margin = ({ children }: { children: React.ReactNode }) => {
    return <div style={{ margin: 20 }}>{children}</div>;
};

const Container = ({ children }: { children: React.ReactNode }) => {
    return <div style={{ margin: 20, borderWidth: 1, borderStyle: "solid", padding: 40 }}>{children}</div>;
};
storiesOf("@comet/admin/buttons", module).add("Split Button - one child", () => {
    return (
        <div>
            <Container>
                <Typography variant={"h4"}>Split Button with only one Child</Typography>
                <Typography>with only one Child automaticlly hides Split Button Selector</Typography>

                <Margin>
                    <SplitButton>
                        <Button
                            onClick={() => {
                                alert("primary clicked");
                            }}
                        >
                            Primary Action
                        </Button>
                    </SplitButton>
                </Margin>
                <Typography>
                    if you want to show the split button selector also if there is only one child, one have to set the
                    <code> showSelectButton=true</code> Prop
                </Typography>
                <Margin>
                    <SplitButton showSelectButton={true}>
                        <Button
                            onClick={() => {
                                alert("primary clicked");
                            }}
                        >
                            Primary Action
                        </Button>
                    </SplitButton>
                </Margin>
                <Typography>Disabled Split Button</Typography>
                <Margin>
                    <SplitButton disabled={true}>
                        <Button
                            onClick={() => {
                                alert("primary clicked");
                            }}
                        >
                            Primary Action
                        </Button>
                    </SplitButton>
                </Margin>
            </Container>
        </div>
    );
});
