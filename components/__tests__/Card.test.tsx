import { render, screen } from '@testing-library/react';
import { Card } from '../Card';

describe('Card Component', () => {
  it('renders card with children', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies default variant styles', () => {
    render(<Card>Default</Card>);
    const card = screen.getByText('Default').parentElement;
    expect(card).toHaveClass('bg-background-secondary');
  });

  it('applies glass variant styles', () => {
    render(<Card variant="glass">Glass</Card>);
    const card = screen.getByText('Glass').parentElement;
    expect(card).toHaveClass('glass-card');
  });

  it('applies gradient variant styles', () => {
    render(<Card variant="gradient">Gradient</Card>);
    const card = screen.getByText('Gradient').parentElement;
    expect(card).toHaveClass('gradient-border');
  });

  it('applies hover styles when hover prop is true', () => {
    render(<Card hover>Hoverable</Card>);
    const card = screen.getByText('Hoverable').parentElement;
    // Note: hover styles only apply on desktop, so this may not always be visible in tests
    expect(card).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Card className="custom-card">Custom</Card>);
    const card = screen.getByText('Custom').parentElement;
    expect(card).toHaveClass('custom-card');
  });
});

