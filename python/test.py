"""Tests for the main module."""

from main import say_hello


def test_say_hello():
    """Verify that say_hello returns the expected greeting."""
    assert say_hello() == "Hello from python!"
    
