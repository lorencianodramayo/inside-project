interface ModalProps {
    isClosable: boolean;
    isVisible: boolean;
    component: any;
    hasFooter: any;
    title: string;
}

interface StepperProps{
    steps: any;
}

interface SelectProps{
    label: string;
    size: any;
    options: any;
}

interface DrawerProps{
    isVisible: boolean;
    onClose: Function;
    title: string;
    placement: any;
}

interface SpinProps{
    isSpinning: boolean;
    delay: number;
    content: any;
}

export type { ModalProps, StepperProps, SelectProps, DrawerProps, SpinProps }