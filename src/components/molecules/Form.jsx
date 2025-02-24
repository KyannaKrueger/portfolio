import styles from "../../styles/Form.module.css";

export default function Form() {
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "325cb870-ba34-49de-83f6-133c9919d28e");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }

    return (
      <>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label htmlFor="name"></label>
            <input type="text" id="name" name="name" placeholder="Enter your name" className={styles.inputField} />
          </div>
    
          <div className={styles.formGroup}>
            <label htmlFor="email"></label>
            <input type="email" id="email" name="email" placeholder="Enter your email" className={styles.inputField} />
          </div>
    
          <div className={styles.formGroup}>
            <label htmlFor="message"></label>
            <textarea id="message" name="message" placeholder="Type your message here" className={styles.textareaField}></textarea>
          </div>
    
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </>
    );
    
    
}