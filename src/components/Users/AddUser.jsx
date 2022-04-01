export default function AddUser(props) {

   const onFormSubmit = (event) => {
      event.preventDefault();
   };

   return (
      <form onSubmit={onFormSubmit}>
         <label htmlFor="username">Username</label>
         <input type="text" id="username" />
         <label htmlFor="age">Age (years)</label>
         <input type="number" id="age" />
         <button type="submit">Submit</button>
      </form>
   );
}