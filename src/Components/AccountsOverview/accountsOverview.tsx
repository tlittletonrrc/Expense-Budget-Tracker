import "./accountsOverview.css";

function AccountsOverview() {
    return(
        <>
            <div>
                <p className="name">checking</p>
                <p>coffee <span>-$10</span></p>
                <p>lunch <span>-$18.50</span></p>
                <p>groceries <span>-$72.19</span></p>
                <p>bus fare <span>-$3.25</span></p>
                <p>movie ticket <span>-$14</span></p>
                <p>gaming subscription <span>-$9.99</span></p>
                <p>gym membership <span>-$45</span></p>
                <p>phone bill <span>-$62.80</span></p>
                <p>gift card sale <span>+$25</span></p>
                <p>cash deposit <span>+$100</span></p>
            </div>
        </>
    );
}
export default AccountsOverview;