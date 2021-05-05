import { ChevronDown } from "@comet/admin-icons";
import { Button, ButtonGroup, ButtonGroupProps, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from "@material-ui/core";
import * as React from "react";
import { PropsWithChildren } from "react";

export interface SplitButtonProps extends ButtonGroupProps<any> {
    selectedIndex?: number;
    onSelectIndex?: (index: number, item: React.ReactElement) => void;
    showSelectButton?: boolean;
}

// Based on https://material-ui.com/components/button-group/#split-button

export const SplitButton = ({ selectedIndex = 0, onSelectIndex, children, showSelectButton, ...restProps }: PropsWithChildren<SplitButtonProps>) => {
    const childrenArray = React.Children.toArray(children);

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLDivElement>(null);

    const handleMenuItemClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number, child: React.ReactElement) => {
        if (onSelectIndex) {
            onSelectIndex(index, child);
        }
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: React.MouseEvent<Document, MouseEvent>) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }

        setOpen(false);
    };

    if (!React.isValidElement(childrenArray[selectedIndex])) {
        return null;
    }

    const ActiveChild = childrenArray[selectedIndex] as React.ReactElement;

    const { variant: activeChildVariant, color: activeChildColor } = ActiveChild.props;

    return (
        <>
            <ButtonGroup variant={activeChildVariant} color={activeChildColor} {...restProps} ref={anchorRef}>
                {ActiveChild}
                {(showSelectButton ?? childrenArray.length > 1) && (
                    <Button
                        variant={activeChildVariant}
                        color={activeChildColor}
                        size="small"
                        classes={ActiveChild.props.classes}
                        onClick={handleToggle}
                    >
                        <ChevronDown />
                    </Button>
                )}
            </ButtonGroup>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal style={{ zIndex: 1200 }}>
                {({ TransitionProps, placement }) => (
                    <Paper>
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin: placement === "bottom" ? "center top" : "center bottom",
                            }}
                        >
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList>
                                    {childrenArray.map((child: React.ReactElement, index) => {
                                        return (
                                            <MenuItem
                                                key={index}
                                                selected={index === selectedIndex}
                                                onClick={(event) => handleMenuItemClick(event, index, child)}
                                                disabled={child.props.disabled}
                                            >
                                                {child.props.children}
                                            </MenuItem>
                                        );
                                    })}
                                </MenuList>
                            </ClickAwayListener>
                        </Grow>
                    </Paper>
                )}
            </Popper>
        </>
    );
};
