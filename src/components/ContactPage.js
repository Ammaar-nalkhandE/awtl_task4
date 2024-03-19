// ContactPage.js

import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
    const contacts = [
        { name: "John Doe", department: "IT", email: "john.doe@example.com", phone: "+1 (123) 456-7890" },
        { name: "Jane Smith", department: "SFC", email: "jane.smith@example.com", phone: "+1 (234) 567-8901" },
        { name: "Alice Johnson", department: "LIB", email: "alice.johnson@example.com", phone: "+1 (345) 678-9012" },
        { name: "Bob Brown", department: "ADM", email: "bob.brown@example.com", phone: "+1 (456) 789-0123" },
        { name: "Charlie Lee", department: "ACC", email: "charlie.lee@example.com", phone: "+1 (567) 890-1234" },
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
