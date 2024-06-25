import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { BiPencil } from "react-icons/bi";
import { FiCamera } from "react-icons/fi";
import { days, mounths, years } from "services/localData/birthday";

const ProfileMe = ({ user }) => {
  const hiddenFileInput = useRef(null);
  const handleRegistration = (data) => console.log(data);
  const [editMode, setEditMode] = useState(false);
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);

  const changeHandler = (e) => {
    const file = e.target.files[0];
    setFile(file);
  }

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  useEffect(() => {
    let fileReader, isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result)
        }
      }
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    }
  }, [file]);

  const toggleIsEditMode = () => {
    setEditMode(current => !current);
  };


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: user?.firstName,
      email: user.email,
      phone: user.phone,
      lastName: user.name,
      gender: user.gender,
      address: user?.address,
      day: null,
      mounth: null,
      year: null,
    },
  });

  const onSubmit = (formValues) => {
    console.log(`formValues`, formValues);
  };


  return (
    <div className="lg:px-4">
      {/* Backround */}
      <div className="img_block">
        <img style={{ objectFit: "cover", objectPosition: "bottom" }} src="https://plus.unsplash.com/premium_photo-1682284079705-dd1631f76f3a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="phone" className="lg:h-48 sm:h-40 rounded-xl" />
      </div>

      <div className="mainInfo_block flex justify-between items-center relative lg:h-28 h-[5.5rem]">

        <div className="block lg:ml-3">
          {fileDataURL ?
            <p className="img-preview-wrapper">
              {
                <img src={fileDataURL} alt="preview" className="lg:w-32 lg:h-32 object-cover w-24 h-24 rounded-full p-1 absolute -top-8 border-white border-2 bg-white z-10" />
              }
            </p> :
            <img src="/media/images/profile_avatar.jpg" alt="ava" className="lg:w-32 w-24 rounded-full p-1 absolute -top-8 border-white border-2 bg-white z-10" />}

          <input
            type="file"
            id='image'
            accept='.png, .jpg, .jpeg'
            className="hidden border"
            ref={hiddenFileInput}
            onChange={changeHandler}
          />
          {
            !editMode && <button onClick={handleClick} className="z-20 absolute lg:left-28 lg:bottom-5 left-16 bottom-4 p-1 rounded-full border-dashed border-2">
              <FiCamera />
            </button>
          }
        </div>

        <div className="flex justify-between lg:w-[85%] w-[70%] px-1 mb-6 items-start">
          <div className="fio pl-0 lg:pl-6">
            <span className="font-semibold"></span>{user.name}<br />
            <span className="font-light text-sm">UI Designer</span>
          </div>
          <div className={`flex px-2 py-1 rounded-sm border h-6 cursor-pointer ${editMode ? 'bg-cyan-600' : 'bg-white'}`} onClick={toggleIsEditMode}>
            {editMode && <BiPencil className="text-white" />}
            <p className={`ml-1 text-xs hidden lg:block ${editMode ? 'text-white' : 'text-black'}`}>
              {
                editMode ? <span>Edit Profile</span> : <span>Cancel</span>
              }
            </p>
          </div>
        </div>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit(handleRegistration)} className="flex flex-col lg:items-end items-stretch">
        <div className="flex lg:flex-row flex-col w-full">
          {/* BLOCK 1 */}
          <div className="lg:w-1/2 lg:pr-6 w-full pr-0">
            <label className="block  text-sm font-semibold mt-3" htmlFor="firstName">
              Аты
            </label>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <input value={value} onChange={onChange} className="appearance-none border rounded w-full py-2 px-3 my-2  leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Аты" name="firstName" disabled={editMode} />
              )}
              name='firstName'
            />

            {/* LastName */}
            <label className="block  text-sm font-semibold mt-3" htmlFor="lastName">
              Тегі
            </label>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <input value={value} onChange={onChange} className="appearance-none border rounded w-full py-2 px-3 my-2  leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Теги" name="lastName" disabled={editMode} />
              )}
              name='lastName'
            />

            {/* Phone */}
            <label className="block  text-sm font-semibold mt-3" htmlFor="phone">
              Телефон
            </label>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <input value={value} onChange={onChange} className="appearance-none border rounded w-full py-2 px-3 my-2  leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Телефоны" name="Phone" disabled={editMode} />
              )}
              name='phone'
            />

            {/* Email */}
            <label className="block  text-sm font-semibold mt-3" htmlFor="email">
              Электрондық почтасы
            </label>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <input value={value} onChange={onChange} className="appearance-none border rounded w-full py-2 px-3 my-2  leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Электрондык почтасы" name="email" disabled style={{ color: "inherit" }} />
              )}
              name='email'
            />
          </div>

          {/* BLOCK 2 */}
          <div className="lg:w-1/2 lg:pr-6 w-full pr-0">
            <label className="block  text-sm font-semibold mt-3">
              Жынысы
            </label>
            <Controller
              name="gender"
              control={control}
              placeholder="Тандау кажет"
              render={({ field }) => (
                <select  {...field} className="w-full mt-2 h-10 border rounded px-3 my-2 bg-white" disabled={editMode}>
                  <option value="female">Еркек</option>
                  <option value="male">Айел</option>
                </select>
              )}
            />

            <label className="block  text-sm font-semibold mt-[10px]" htmlFor="address">
              Мекен-жайы
            </label>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <input value={value} onChange={onChange} className="appearance-none border rounded w-full py-2 px-3 my-2  leading-tight focus:outline-none focus:shadow-outline" type="Мекен-жайы" placeholder="Мекен-жайы" name="address" disabled={editMode} />
              )}
              name='address'
            />


            <label className="block  text-sm font-semibold mb-2 mt-3">Туган куни</label>

            {/* Days */}
            <Controller
              name="day"
              control={control}
              placeholder="-"
              render={({ field }) => (
                <select  {...field} className="w-[20%] lg:mr-3 mr-2 h-10 border rounded px-3 bg-white" disabled={editMode}>
                  {
                    days.map((d) => (
                      <option value={d.value} key={d.id}>{d.value}</option>
                    ))
                  }
                </select>
              )}
            />

            {/* Mounths */}
            <Controller
              name="mounth"
              control={control}
              placeholder="-"
              render={({ field }) => (
                <select  {...field} className="w-[37%] lg:mr-3 mr-2 h-10 border rounded px-3 bg-white" disabled={editMode}>
                  {
                    mounths.map((d) => (
                      <option value={d.value} key={d.id}>{d.title}</option>
                    ))
                  }
                </select>
              )}
            />

            {/* Years */}
            <Controller
              name="year"
              control={control}
              placeholder="-"
              render={({ field }) => (
                <select  {...field} className="w-[37%] h-10 border rounded px-3 bg-white" disabled={editMode}>
                  {
                    years.map((d) => (
                      <option value={d.value} key={d.id}>{d.value}</option>
                    ))
                  }
                </select>
              )}
            />

          </div>
        </div>
        {
          !editMode && (
            <button className="mt-6 px-4 py-2 bg-amber-700 text-white rounded-lg" onPress={handleSubmit(onSubmit)}>Сақтау</button>

          )
        }
      </form>
    </div>
  );
};

export default ProfileMe;
