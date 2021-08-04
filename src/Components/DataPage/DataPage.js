import './DataPage.css' ;

const DataPage = () => {

    const obj = {}

    const input_change_handler = (event) => {
        console.log(event.target.value);
        obj['hola'] = event.target.value;
        console.log(obj)
    }

    const submitHandler = (e) => {

        e.preventDefault();

    }


    return <div>

        <div className={'bg'}>


            <div>
                <h1 className={'heading'}>HUNTER ISLAND</h1>
            </div>

            <form className='container' onSubmit={submitHandler} action="">


                <div className={'common-css-labeller'}>
                    <label className='common-inside-css-labeller' htmlFor="device-type">Device Type</label>

                    <select onChange={input_change_handler} className='labeller' name="device-type" id="device-type">
                        <option value="first_device">First Device</option>
                        <option value="second_device">Second Device</option>
                        <option value="third_device">Third Device</option>
                    </select>
                </div>

                <div className={'common-css-labeller'}>
                    <label className='common-inside-css-labeller' htmlFor="os">Operating System</label>

                    <select onChange={input_change_handler} className='labeller' name="os" id="os">
                        <option value="windows">Windows</option>
                        <option value="mac">Mac</option>
                        <option value="ubuntu">Ubuntu</option>
                    </select>

                </div>

                <div className={'common-css-labeller'}>
                    <label className='common-inside-css-labeller' htmlFor="cougarnet">Cougarnet</label>
                    <div className={'borderer'}>
                        <input onChange={input_change_handler} className='labeller' name={'cougarnet'} id={'cougarnet'}
                               type="text"/>
                    </div>
                </div>

                <div className={'common-css-labeller'}>
                    <label className='common-inside-css-labeller' htmlFor="">Landesk</label>
                    <div>
                        <label className='common-inside-css-labeller' htmlFor="ad">AD</label>
                        <input onChange={input_change_handler} className='labeller' name={'ad'} id={'ad'}
                               type="checkbox"/>
                    </div>
                </div>

                <div className={'common-css-labeller'}>
                    <label className='common-inside-css-labeller' htmlFor="firstname">First Name</label>
                    <div>
                        <input onChange={input_change_handler} className='labeller' name='firstname' id={'firstname'}
                               type="text"/>
                    </div>
                </div>

                <div className={'common-css-labeller'}>
                    <label className='common-inside-css-labeller' htmlFor="building">Building*</label>
                    <select onChange={input_change_handler} className='labeller' name="building" id="building">
                        <option value="building1">Building 1</option>
                        <option value="building2">Building 2</option>
                        <option value="building3">Building 3</option>
                    </select>
                </div>

                <div className={'common-css-labeller'}>
                    <label className='common-inside-css-labeller' htmlFor="lastname">Last Name</label>
                    <div>
                        <input onChange={input_change_handler} className='labeller' name={'lastname'} id={'lastname'}
                               type="text"/>
                    </div>
                </div>

                <div className={'common-css-labeller'}>
                    <label className='common-inside-css-labeller' htmlFor="roomno">Room No*</label>
                    <div>
                        <input onChange={input_change_handler} className='labeller' name='roomno' id='roomno'
                               type="text"/>
                    </div>
                </div>

                <div className={'common-css-labeller'}>
                    <label className='common-inside-css-labeller underliner' htmlFor="device-name">Device Name*</label>
                    <div>
                        <input onChange={input_change_handler} className='labeller' name={'device-name'}
                               id={'device-name'} type="text"/>
                    </div>
                </div>

                <div className={'common-css-labeller'}>
                    <label className='common-inside-css-labeller' htmlFor="floor">Floor*</label>
                    <div>
                        <input onChange={input_change_handler} className='labeller' name={'floor'} id={'floor'}
                               type="text"/>
                    </div>
                </div>


                <button className='submitter' type={'submit'}>Submit</button>


            </form>

        </div>


    </div>


}


export default DataPage;
