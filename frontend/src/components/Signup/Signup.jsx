import React, {useState} from "react";
import styles from "./Signup.module.css";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={styles.signup_container} style={{ backgroundImage: "url(/images/signup-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
            <div className={styles.signup_card}>
                <h1 className={styles.signup_title}>Create an Account</h1>
                <form className={styles.signup_form}>
                    <div className={styles.form_group}>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" />
                    </div>

                    <div className={styles.form_group}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" />
                    </div>

                    <div className={styles.form_group}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Create a password"
                        />
                    </div>

                    <button type="submit" className={styles.submit_btn}>
                        Sign Up
                    </button>
                </form>

                <p className={styles.login_text}>
                    Already have an account? <a href="/login">Login here</a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
