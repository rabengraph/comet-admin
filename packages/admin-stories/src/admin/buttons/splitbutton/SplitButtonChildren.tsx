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

storiesOf("@comet/admin/buttons", module).add("Split Button - children", () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    return (
        <div>
            <Container>
                <Typography variant={"h4"}>Split Button with Children</Typography>

                <Margin>
                    <SplitButton
                        selectedIndex={selectedIndex}
                        onSelectIndex={(index, item) => {
                            setSelectedIndex(index);
                        }}
                    >
                        <Button onClick={() => alert("Clicked Here Button")}>Split Button</Button>
                        <Button onClick={() => alert("Clicked Here Button")}>Split Button 2</Button>
                    </SplitButton>
                </Margin>
                <Typography variant={"h4"}>Split Button</Typography>
                <Margin>
                    <SplitButton
                        selectedIndex={selectedIndex}
                        onSelectIndex={(index, item) => {
                            setSelectedIndex(index);
                        }}
                    >
                        <Button onClick={() => alert("Clicked Here Button")}>Here</Button>
                        <Button disabled={true}>Here2</Button>
                        <div
                            onClick={() => {
                                alert("on div click");
                            }}
                        >
                            blubb
                        </div>
                    </SplitButton>
                </Margin>
            </Container>
        </div>
    );
});
