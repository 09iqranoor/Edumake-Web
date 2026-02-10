import React from 'react';
import './PaymentsList.css';

// Import avatars
import avatar1 from '../../assets/schoolmanagment/avatarprofile.png';
import avatar2 from '../../assets/profile-img.png';

const PaymentsList: React.FC = () => {
    const payments = [
        {
            name: 'Adam Smith',
            class: 'JSS1A',
            fees: '₦150,000.00',
            paid: '₦100,000.00',
            balance: '₦50,000.00',
            avatar: avatar1
        },
        {
            name: 'Alexander Brown',
            class: 'JSS3B',
            fees: '₦150,000.00',
            paid: '₦50,000.00',
            balance: '₦100,000.00',
            avatar: avatar2,
            paidColor: '#FB0202'
        },
        {
            name: 'Bridget Davis',
            class: 'SS2A',
            fees: '₦150,000.00',
            paid: '₦100,000.00',
            balance: '₦50,000.00',
            avatar: avatar1 // Using avatar1 as a placeholder for a second child
        },
    ];

    return (
        <div className="payments-container">
            <div className="payments-header">
                <h2 className="payments-title">Payments</h2>
                <button className="view-all-btn">View all</button>
            </div>

            <div className="payments-items">
                {payments.map((payment, idx) => (
                    <div key={idx} className="payment-card">
                        <div className="card-top">
                            <div className="user-profile">
                                <img src={payment.avatar} alt={payment.name} className="user-avatar" />
                                <div className="user-text">
                                    <span className="user-name">{payment.name}</span>
                                    <span className="user-class">{payment.class}</span>
                                </div>
                            </div>
                            <div className="fees-info">
                                <span className="info-label">Fees</span>
                                <span className="fees-val">{payment.fees}</span>
                            </div>
                        </div>

                        <div className="card-bottom">
                            <div className="status-info">
                                <span className="info-label">Paid</span>
                                <span className="status-val paid" style={payment.paidColor ? { color: payment.paidColor } : {}}>
                                    {payment.paid}
                                </span>
                            </div>
                            <div className="status-info align-right">
                                <span className="info-label">Balance</span>
                                <span className="status-val balance">{payment.balance}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PaymentsList;
