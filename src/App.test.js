// App.test.js
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the TodoApp component and allows adding a task', () => {
    render(<App />);

    // Dit controleer of de titel correct wordt weergegeven
    expect(screen.getByText("Maëva's To-Do List")).toBeInTheDocument();

    // Dit voeg een taak toe
    const input = screen.getByPlaceholderText('Voeg een taak toe');
    const addButton = screen.getByText('Toevoegen');

    fireEvent.change(input, { target: { value: 'Nieuwe taak' } });
    fireEvent.click(addButton);

    // Dit controleer of de taak in de lijst staat
    expect(screen.getByText('Nieuwe taak')).toBeInTheDocument();
});

test('removes a todo item', () => {
    render(<App />);

    // Dit voeg een taak toe
    const input = screen.getByPlaceholderText('Voeg een taak toe');
    const addButton = screen.getByText('Toevoegen');

    fireEvent.change(input, { target: { value: 'Te verwijderen taak' } });
    fireEvent.click(addButton);

    // Dit controleer of de taak in de lijst staat
    expect(screen.getByText('Te verwijderen taak')).toBeInTheDocument();

    // Dit verwijder de taak
    const removeButton = screen.getByText('Verwijderen');
    fireEvent.click(removeButton);

    // Dit controleer of de taak is verwijderd
    expect(screen.queryByText('Te verwijderen taak')).not.toBeInTheDocument();
});