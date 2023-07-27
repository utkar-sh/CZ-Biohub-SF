from django.db import models

class FibonacciNumber(models.Model):
    n = models.IntegerField(unique=True)  # Field to store the value of 'n'
    series = models.CharField(max_length=200, default='')  # Field to store the generated Fibonacci series as a string

    def __str__(self):
        return f"Fibonacci series for n={self.n}"  # String representation of the FibonacciNumber object
