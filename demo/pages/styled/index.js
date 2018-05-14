export default () => (
    <div>
        Hello world
        <p>scoped!</p>
        <style jsx>{`
            p {
                color: #FFF;
            }
            div {
                background: blue;
            }
        `}</style>
        <style global jsx>{`
            body {
                background-color: #FFF;
            }
        `}</style>
    </div>
);
