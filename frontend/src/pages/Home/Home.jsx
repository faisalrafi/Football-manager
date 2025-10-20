import React from "react";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.home_container}>
            {/* ===== Hero Section ===== */}
            <section className={styles.hero_section}>
                <div className={styles.hero_content}>
                    <h1>Welcome to BS Football Manager</h1>
                    <p>
                        Manage your football team, organize tournaments, and track match
                        results — all in one place!
                    </p>
                    <div className={styles.hero_buttons}>
                        <button className={`${styles.btn} ${styles.primary_btn}`}>
                            Manager Login
                        </button>
                        <button className={`${styles.btn} ${styles.secondary_btn}`}>
                            Join Tournament
                        </button>
                    </div>
                </div>
            </section>

            {/* ===== Feature Section ===== */}
            <section className={styles.features_section}>
                <h2>Why Use BS Football Manager?</h2>
                <div className={styles.features_grid}>
                    <div className={styles.feature_card}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2220/2220750.png"
                            alt="Team Management"
                        />
                        <h3>Manage Your Team</h3>
                        <p>
                            Register your team, add players, and update details anytime through
                            a simple manager dashboard.
                        </p>
                    </div>

                    <div className={styles.feature_card}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/744/744465.png"
                            alt="Tournament Setup"
                        />
                        <h3>Organize Tournaments</h3>
                        <p>
                            Admins can create groups, schedule matches, and record results with
                            a few clicks.
                        </p>
                    </div>

                    <div className={styles.feature_card}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/1041/1041873.png"
                            alt="Match Stats"
                        />
                        <h3>Track Match Results</h3>
                        <p>
                            Follow every match, check live scores, and see how your team ranks
                            in the leaderboard.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
