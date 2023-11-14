import React from 'react';
import Login from './Login';
import OneTimePassword from './OneTimePassword';

export default function App({ user, requireMfa }) {
  // User enabled MFA but did not verify code, show OTP form
  if (requireMfa) {
    return <OneTimePassword enabled={true} />;
  }

  // User not logged in, show login form
  if (!user) {
    return <Login />;
  }

  // User is authenticated
  return (
    <div>
      <p>
        <h1>
          Hello, {user.fname} {user.lname}.
        </h1>
        <h1>Age: {user.age}</h1>
        Your workouts are:
        {user.workout.map((item, i) => (
          <li key={i}>
            <span className="input-label">{item}</span>
          </li>
        ))}
        Your Diet:
        {user.diet.map((item, i) => (
          <li key={i}>
            <span className="input-label">{item}</span>
          </li>
        ))}
      </p>
      <a href="/logout">Logout</a>

      {user.mfaEnabled ? (
        <p>Congratulations, multi factor authentication is enabled.</p>
      ) : (
        <OneTimePassword enabled={false} />
      )}
    </div>
  );
}
