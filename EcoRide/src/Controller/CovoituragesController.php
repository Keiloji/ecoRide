<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class CovoituragesController extends AbstractController
{
    #[Route('/Covoiturages')]
    public function covoiturages(): Response
    {
        return new Response("Bienvenue sur votre page covoiturages!");
    }
}
