import Swal from 'sweetalert2'

const AddTaskComponent = () => {

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const start = form.start.value;
        const details = form.details.value;
        const end = form.end.value;
        const newTask = { name, start, details, end, }
        console.log(newTask)

        // send data to the server
        fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Successfully added💖💖',
                        text: 'You have added this Task',
                        icon: 'success',
                        confirmButtonText: 'Go back'
                    })
                }

            })
    }

    return (
        <div className="max-w-7xl p-4 bg-[#F4F3F0] mx-auto text-center mt-10">
            <h3 className="text-4xl text-shadow font-primary mb-8">Add a new task</h3>
            <p className="font-secondary font-normal text-sm">Task management is the systematic approach of planning, organizing, and executing tasks within projects. <br /> It ensures efficient workflow by breaking down projects, assigning responsibilities, setting deadlines, <br />  and monitoring progress. Vital for both personal and professional success, it fosters collaboration, <br /> accountability, and adaptability in dynamic environments. </p>
            <form onSubmit={handleAddCoffee} className="mt-8 text-center mx-auto font-secondary">
                <div className="md:flex md:gap-8 justify-center">
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Title" className="input" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Start date</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="start" placeholder="Enter task start date" className="input" />
                            </label>
                        </div>

                    </div>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="details" placeholder="About your task" className="input" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">End date</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="end" placeholder="End date" className="input" />
                            </label>
                        </div>
                    </div>
                </div>
                <input className="btn font-primary font-normal hover:bg-[#947e61] border-[#331A15] hover:border-[#271310] text-2xl bg-[#D2B48C] text-[#331A15] md:w-2/5 w-4/5 mt-6" type="submit" value="Add task" />
            </form>

        </div>
    );
};

export default AddTaskComponent;