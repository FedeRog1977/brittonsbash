import Article from '../Article';

function ArticleStories() {
    const sectionsSample = [
        {
            type: "h1",
            content: "Header",
        },
        {
            type: "h2",
            content: "Header",
        },
        {
            type: "body",
            content: "This is a test body paragraph of text.",
        },
        {
            type: "body",
            content: "This is a test body paragraph of text.",
        },
        {
            type: "body",
            content: "This is a test body paragraph of text.",
        },
        {
            type: "h2",
            content: "Header",
        },
        {
            type: "body",
            content: "This is a test body paragraph of text.",
        },
        {
            type: "body",
            content: "This is a test body paragraph of text.",
        },
    ]

    return (
        <>
            <Article sections={sectionsSample} fontFamily="serif" textAlign="justify" />
            {/* ... */}
        </>
    );
}

export default ArticleStories;