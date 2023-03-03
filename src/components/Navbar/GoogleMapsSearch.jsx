import { useEffect, useState } from 'react';

const GoogleMapsSearch = () => {
    const [text, setText] = useState("");
    const [coincidences, setCoincidences] = useState([]);

    const getMatches = async () => {
        return new Promise ((resolve, reject) => {
            if (!text) {
                return reject(new Error("Need valid text input"));
            }

            if (typeof window === "undefined") {
                return reject(new Error("Need valid window object"));
            }

            try {
                console.log(window.google);
                new window.google.maps.place.AutocompleteService().getPlacePredictions({
                    input: text,
                    componentRestriction: {country: "mx" },
                    types: ["address"],
                },
                resolve)
            }
            catch(e) {
                reject(e);
            }
        })
    }

    const doQuery = async () => {
        const results = JSON.parse(JSON.stringify(await getMatches()));
        setCoincidences(results.map((result) => result.description))
        console.log(
            "file: googleautocomplete.jsx -- line 34 - useEffect - results", results
        )
    };

    useEffect(() => {
        if (text) {
            doQuery()
        }
    }, [text])

    return (
        <div>
            <input 
                className='flex justify-center'
                type='text'
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
                placeholder="Search location or pole"
            />
            {coincidences.length > 0 && (
                <ul id='coincidences_list'>
                    {coincidences.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default GoogleMapsSearch