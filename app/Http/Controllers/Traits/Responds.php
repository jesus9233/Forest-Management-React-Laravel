<?php
namespace App\Http\Controllers\Traits;

/**
 * Utility methods for API responses.
 */
trait Responds
{
    /**
     * No results found for a specific request.
     *
     * You should not use this for empty arrays of data. This is to be used
     * when a specific observation has been requested by id and was not
     * found in the DB.
     *
     * @param String $message
     * @return \Illuminate\Http\JsonResponse
     */
    protected function notFound($message)
    {
        return response()->json([
          'error' => $message,
        ], 404);
    }

    /**
     * The user is not authorized to perform the request.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function unauthorized()
    {
        return response()->json([
          'error' => 'Unauthorized request',
        ], 401);
    }

    /**
     * Successful response.
     *
     * @param array $data
     * @return \Illuminate\Http\JsonResponse
     */
    protected function success($data)
    {
        return response()->json([
          'data' => $data,
        ], 200);
    }

    /**
     * Bad request response
     *
     * @param String $message
     * @param Integer $error_code Internal application error code.
     * @return \Illuminate\Http\JsonResponse
     */
    protected function error($message, $error_code = 100)
    {
        return response()->json([
          'error' => $message,
          'code' => $error_code
        ], 400);
    }

    /**
     * Successful creation of a new record.
     *
     * According to RFC 2616, this can be used for both newly created records
     * submitted using POST or updated records submitted using PUT.
     *
     * @param  Mixed $message (optional)
     * @return \Illuminate\Http\JsonResponse
     */
    protected function created($message = null) {
        return response()->json([
          'data' => $message ?: 'The record has been saved successfully'
        ], 201);
    }
}
