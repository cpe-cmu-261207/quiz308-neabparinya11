function Repline(props:any) {
    const { data } = props
    return (
        <div className="flex p-2 items-start space-x-2 pl-14">
            <img className="w-10 w-10 rounded-full" src={data.userImagePath}></img>
            <div className="bg-gray-500 rounded-lg p-2">
                <p className="font-semibold text-white">{data.username}</p>
                <p className='text-white'>{data.commentText}</p>
            </div>
        </div>
    );
}
export default Repline;