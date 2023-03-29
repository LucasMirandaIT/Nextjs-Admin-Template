interface ContentProps {
    children?: any;
}
const Content = ({children}: ContentProps) => {
return (
    <div className="flex flex-col mt-4">
        {children}
    </div>
);
};

export default Content;