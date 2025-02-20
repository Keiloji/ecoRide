<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class SignupController extends AbstractController
{
    #[Route('/Signup')]
    public function signup(): Response
    {
        return new Response("Bienvenue sur votre page d'inscription!");
    }
}
