export default interface Props {
    children? :React.ReactNode;
    variant?: 'text' | 'nav';
    className?:string;
    href:'/'| '/about_us' | '/services' | '/contact_us' | string;
}
