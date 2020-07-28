const RecordCard = function ({item}) {
  return <div><h1>Record className='record-card' {item.id}</h1><span>{item.description}</span></div>;
}

const RecordCardTable = function RecordCardTable({items}) {
	let listCard = items.map((item)=>{
		return <li><RecordCard item={item} ></RecordCard></li>
	})
  return <div className='record-table'><ul >{listCard}</ul></div>
}
export default RecordCardTable;
