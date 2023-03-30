import Style from '../../styles/Components/Preloader/Preloader.module.css';

const Preloader = () => {
    return (
        <main>
            <section className={Style.preloader}>
                <div className={Style.lds_heart}><div></div></div>
            </section>
        </main>
    );
};

export default Preloader;