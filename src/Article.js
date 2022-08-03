export default function Article(props){

return (
<div className="max-w-md mx-auto bg-white overflow-hidden md:max-w-2xl mt-5">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-48 w-full object-cover md:h-full md:w-48 rounded-lg mb-2" src={props.imageUrl} alt="Man looking at item at a store"></img>
    </div>
    <div className="p-8 rounded-lg">
      <div className="text-sm  flex flex-row justify-start items-center">
        <img src="./placeholder.png" alt="pin" className="mr-3" />
        <p className="mr-3 uppercase fond-medium tracking-widest">{props.location}</p>
        <a href={props.googleMapsUrl} className="mr-3 text-gray-400">View on Google Maps</a>

      </div>
      <h1 className="mt-4 mr-2 text-2xl font-medium text-black">{props.title}</h1>
      <p className="mt-2 font-medium">{props.startDate} - {props.endDate}</p>
      <p className="text-gray-700 mt-4">{props.description}</p>
    </div>
  </div>
</div>
 )       



}

