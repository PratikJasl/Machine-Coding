//Component to handle file upload and display expected schema for an Excel file
function Upload(){
    return(
        <section id="upload" className="h-full w-full mt-30">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Excel Data Uploader</h1>
            <form className="flex flex-col items-center gap-3 p-10 shadow-lg rounded-2xl">
                <label htmlFor="file-upload" className="block text-gray-700 text-sm font-semibold mb-2">
                    Upload Excel File (.xls, .xlsx)
                </label>
                <input 
                id="file-upload"
                type="file"
                accept=".xls,.xlsx"
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />

                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 w-full">
                    Upload file
                </button>
            </form>

            <div className="mt-8 text-gray-700 text-sm">
                <h3 className="font-semibold text-lg mb-2">Expected Excel Schema:</h3>
                <p className="mb-2">Your Excel file should have the following columns with the specified data types:</p>
                <ul className="flex flex-col items-start list-disc list-inside bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <li className="mb-1">
                        <span className="font-mono text-blue-800">Error Code</span>: <span className="text-purple-700">String</span>
                    </li>
                    <li className="mb-1">
                        <span className="font-mono text-blue-800">Failure Description</span>: <span className="text-purple-700">String</span>
                    </li>
                    <li className="mb-1">
                        <span className="font-mono text-blue-800">Root Cause</span>: <span className="text-purple-700">String</span>
                    </li>
                    <li className="mb-1">
                        <span className="font-mono text-blue-800">Location</span>: <span className="text-purple-700">String</span>
                    </li>
                    <li className="mb-1">
                        <span className="font-mono text-blue-800">Components to Check</span>: <span className="text-purple-700">String</span>
                    </li>
                    <li className="mb-1">
                        <span className="font-mono text-blue-800">Suggested Actions</span>: <span className="text-purple-700">String</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Upload;