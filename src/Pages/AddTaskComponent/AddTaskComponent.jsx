import Swal from 'sweetalert2';

const AddTaskComponent = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const start = form.start.value;
    const details = form.details.value;
    const end = form.end.value;
    const newTask = { name, start, details, end };
    console.log(newTask);

    // send data to the server
    fetch('https://taskly-server.vercel.app/tasks', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Successfully added 💖💖',
            text: 'You have added this Task',
            icon: 'success',
            confirmButtonText: 'Go back',
          });
        }
      });
  };

  return (
    <div className="max-w-7xl p-8 bg-[#cfcaa9] mx-auto text-center mt-10 rounded-lg">
      <div className="md:flex md:gap-8 justify-center">
        <div className="md:w-1/2 text-left">
          <h3 className="text-4xl text-[#0a090b] font-bold mb-8">Add a new task</h3>
          <p className="font-secondary text-sm text-[#19181a] mb-6">
            Task management is the systematic approach of planning, organizing, and executing tasks within projects. <br /> It ensures efficient workflow by breaking down projects, assigning responsibilities, setting deadlines, <br /> and monitoring progress. Vital for both personal and professional success, it fosters collaboration, <br /> accountability, and adaptability in dynamic environments.
          </p>
        </div>
        <div className="md:w-1/2 text-center">
          <form onSubmit={handleAddCoffee} className="font-secondary">
            <div className="mb-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#0d0c0e]">Title</span>
                </label>
                <label className="input-group">
                  <input type="text" name="name" placeholder="Title" className="input" />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#181819]">Start date</span>
                </label>
                <label className="input-group">
                  <input type="text" name="start" placeholder="Enter task start date" className="input" />
                </label>
              </div>
            </div>
            <div className="mb-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#1d1c1e]">Details</span>
                </label>
                <label className="input-group">
                  <input type="text" name="details" placeholder="About your task" className="input" />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#101010]">End date</span>
                </label>
                <label className="input-group">
                  <input type="text" name="end" placeholder="End date" className="input" />
                </label>
              </div>
            </div>
            <input
            className="btn font-primary font-normal hover:bg-[#F9A825] border-[#F57C00] hover:border-[#E65100] text-2xl bg-[#0b0a0c] text-white w-full md:w-auto"
              type="submit"
              value="Add task"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTaskComponent;
