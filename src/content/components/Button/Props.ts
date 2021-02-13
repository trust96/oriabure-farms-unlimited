export default interface Props {
    children?: React.ReactNode;
    variant: 'primary'|'outline';
    onClick():void;
    className?:string;
    }