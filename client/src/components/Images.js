import useBlockchain from "../hooks/useFirestore";

const Images = ({ setSelectedImg }) => {

    const { docs } = useBlockchain();



    return (
        <div className='img-grid'>
            { docs && docs.map(doc => (
                <div className="img-wrap" key={doc.id} onClick={() => setSelectedImg(doc.url)}>
                    <img src={doc.url} />
                </div>
            ))}
        </div>
    )
}

export default Images;