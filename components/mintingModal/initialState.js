import {GiEarthAmerica} from 'react-icons/gi'

const style = {
    wrapper: `h-[20rem] w-[35rem] text-white bg-[#15202b] rounded-3xl p-10 flex flex-col`,
    inputFieldsContainer: `flex-1`,
    inputContainer: `mb-4`,
    fileInput: `hidden`,
    input: `bg-transparent outline-none text-xl w-full`,
    customInput: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
    fileSelected: `bg-[#2b6127] text-white px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
    lower: `flex justify-between items-center`,
    visibility: `flex items-center text-[#1d9bf0] text-sm font-bold`,
    visibilityText: `ml-2`,
    mintButton: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
    inactiveMintButton: `text-black px-3 py-1 rounded-full bg-[#8899a6]`,
  }

const initialState = ({
    profileImage,
    setProfileImage,
    name,
    setName,
    decription,
    setDescription,
    mint,
}) => {
  return (
    <div className={style.wrapper}>
        <div className={style.inputFieldsContainer}>
            <div className={style.inputContainer}>
                <label htmlFor="image-upload"
                className={profileImage? style.fileSelected: style.customInput}
                ></label>
                <input type="file"
                    id="image-upload"
                    accept=".jpg, .jpeg, .png"
                    className={style.fileInput}
                    placeholder="image URL"
                    onChange={e => setProfileImage(e.target.files[0])}
                />
            </div>
            <div className={style.inputContainer}>
                
            </div>
        </div>
    </div>
  )
}

export default initialState