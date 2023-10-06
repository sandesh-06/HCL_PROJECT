import React from "react";
import DetailItem from "./alignComponents/DetailItem";

export default function ManagerDetails(props) {
    let formatDate = (dateString) => {
        let date = new Date(dateString);
        return `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;
    }

    let formattedDate = formatDate(props.manager.joinedDate);
    let formattedDOB = formatDate(props.manager.dob);

    return (
        <div className="col-span-4 row-span-2 bg-[#2f2b3a] rounded-2xl flex items-center p-8">
            <div className="w-1/2 pr-8 ml-10 grid grid-col-2 h-full">
                <div className="text-[2.5em] font-extrabold text-white mb-4 text-start col-span-2">
                    Welcome, <span className="text-[1.25em] font-extrabold bg-gradient-to-r from-[#5e43f3] to-[#9171f8] text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-[#9171f8] hover:to-[#5e43f3] hover:cursor-default">{props.manager.name}</span>
                </div>

                <DetailItem label="Employee ID" value={props.manager.empid} />
                <DetailItem label="Email" value={props.manager.email} />
                <DetailItem label="Dept Name" value={props.manager.department?.dname} />
                <DetailItem label="Dept ID" value={props.manager.department?.dID} />
                <DetailItem label="Date of Birth" value={formattedDOB} />
                <DetailItem label="Joined Date" value={formattedDate} />
            </div>
            <div className="w-1/2 flex justify-center">
                <img
                    src="https://srcwap.com/wp-content/uploads/2022/08/abstract-user-flat-4.png"
                    alt="Manager"
                    className="w-1/2 h-1/2 bg-[#9171f8] border-black border-2 rounded-full shadow-2xl hover:border-white "
                />
            </div>
        </div>
    );
}
