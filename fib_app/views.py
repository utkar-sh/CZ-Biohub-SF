import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import FibonacciNumber

@csrf_exempt
def fibonacci(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)  # Parse the request body to extract JSON data
            n = int(data['n'])  # Get the value of 'n' from the JSON data
        except (json.JSONDecodeError, KeyError, ValueError) as e:
            return JsonResponse({"error": "Invalid JSON data.", "details": str(e)}, status=400)

        fibonacci_numbers = FibonacciNumber.objects.filter(n=n)  # Check if Fibonacci series for 'n' already exists
        if fibonacci_numbers.exists():
            numbers = [int(num) for num in fibonacci_numbers[0].series.split(', ')]  # Get the series from the database
        else:
            # Generate the Fibonacci series and store it in the database
            numbers = [0, 1]
            for i in range(2, n):
                numbers.append(numbers[-1] + numbers[-2])

            series_str = ', '.join(map(str, numbers))
            FibonacciNumber.objects.create(n=n, series=series_str)

        return JsonResponse({"numbers": numbers})  # Return the generated Fibonacci series

    return JsonResponse({"error": "Invalid request method."}, status=400)  # Return error for non-POST requests

def generate_fibonacci_series(n):
    fib_series = [0, 1]
    while len(fib_series) < n:
        fib_series.append(fib_series[-1] + fib_series[-2])
    return fib_series  # Function to generate the Fibonacci series for a given 'n'

@csrf_exempt
def health_check(request):
    if request.method == "GET":
        # If this endpoint doesn't require any input, it can simply return a 200 status code.
        return JsonResponse({'status': 'healthy'}, status=200)  # Return a 200 status code for health check
    else:
        return JsonResponse({"error": "Invalid request method."}, status=405)  # Return error for non-GET requests
