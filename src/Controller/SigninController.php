<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class SigninController extends AbstractController
{
    #[Route('/Signin')]
    public function signin(): Response
    {
        return new Response("Bienvenue sur votre page de connexion!");
    }
}
