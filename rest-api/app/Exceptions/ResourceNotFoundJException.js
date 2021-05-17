'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class ResourceNotFoundJException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle (error, { response }) {
    return response.status(404).json({
      error: 'El recuerso no existe'
    });

  }
}

module.exports = ResourceNotFoundJException
