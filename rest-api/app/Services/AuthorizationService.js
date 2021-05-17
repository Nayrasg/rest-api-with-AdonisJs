const AccessInvalidException = use('App/Exceptions/AccessInvalidException');
const ResourceNotFoundJException = use('App/Exceptions/ResourceNotFoundJException');

class AuthorizationService {
    verifyPermmission(resource, user) {
        if (!resource){
            throw new ResourceNotFoundJException();
        };

        if (resource.user_id !== user.id) {
            throw new AccessInvalidException();        
        };
    }

}
module.exports = new AuthorizationService();