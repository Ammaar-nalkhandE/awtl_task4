// ContactPage.js

import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
    const contacts = [
        { name: "John First", department: "IT", email: "john.first@example.com", phone: "00112233" },
        { name: "John Second", department: "SFC", email: "john.second@example.com", phone: "44556677" },
        { name: "John Third", department: "LIB", email: "john.third@example.com", phone: "88990011" },
        { name: "John Forth", department: "ADM", email: "john.forth@example.com", phone: "22334455" },
        { name: "John Fifth", department: "ACC", email: "john.fifth@example.com", phone: "66778899" },
    ];

    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <div className="contact-list">
                {contacts.map(contact => (
                    <div key={contact.email} className="contact-item">
                        <h2>{contact.name}</h2>
                        <p><strong>Department:</strong> {contact.department}</p>
                        <p><strong>Email:</strong> {contact.email}</p>
                        <p><strong>Phone:</strong> {contact.phone}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ContactPage;
