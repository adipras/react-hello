import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { v4 } from "uuid";
import NotFound from '../components/NotFound';
import DefinitionSearch from '../components/DefinitionSearch';

export default function Definition() {
    const [word, setWord] = useState();
    const [notFound, setNotFound] = useState(false);
    const [error, setError] = useState(false);
    let { search } = useParams();

    useEffect(() => {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
            .then((response) => {
                if (response.status === 404) {
                    setNotFound(true);
                }

                if (!response.ok) {
                    setError(true);
                    throw new Error('Something went wrong!');
                }
                return response.json()
            })
            .then((data) => {
                setWord(data[0].meanings)
            })
            .catch((e) => {
                console.log(e.message);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (notFound === true) {
        return (
            <>
                <NotFound />
                <Link to="/dictionary">Search another</Link>
            </>
        );
    }

    if (error === true) {
        return (
            <>
                <p>Something went wrong!</p>
                <Link to="/dictionary">Search another</Link>
            </>
        );
    }
    return (
        <>
            {word ? (
                <>
                    {word.map((meaning) => {
                        return (
                            <p key={v4()} >
                                {meaning.partOfSpeech + ': '}
                                {meaning.definitions[0].definition}
                            </p>
                        )
                    })}
                    <p>Search again:</p>
                    <DefinitionSearch />
                </>
            ) : null}
        </>
    )
}