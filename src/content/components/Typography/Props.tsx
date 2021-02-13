export interface Props {
    tag: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'p'|'span';
    children?:React.ReactNode;
    variant: 'title'|'para'|'caption'|'overline';
    title?:'primary'|'secondary'|'terziary'|'quartenary';
    para?:'primary'|'secondary';
    className?:string;
}
